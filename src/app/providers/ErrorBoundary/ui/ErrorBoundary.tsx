import React, {
    ErrorInfo, ReactNode, Suspense,
} from 'react';
import { ErrorBoundaryMessage } from '@/widgets/ErrorBoundaryMessage';
// import { withTranslation } from 'react-i18next';

interface ErrorBoundaryProps {
    children: ReactNode
}

interface ErrorBoundaryState {
    hasError: boolean
}

export class ErrorBoundary
    extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error:Error) { // Обновить состояние с тем, чтобы следующий рендер показал запасной UI.
        return { hasError: true };
    }

    componentDidCatch(error:Error, errorInfo: ErrorInfo) { // Можно также сохранить информацию об ошибке в соответствующую службу журнала ошибок
        console.log(error, errorInfo);
    }

    render() {
        const { hasError } = this.state;
        const { children } = this.props;

        if (hasError) { // Можно отрендерить запасной UI произвольного вида
            return (
                <Suspense fallback="">
                    <ErrorBoundaryMessage />
                </Suspense>
            );
            // eslint-disable-next-line i18next/no-literal-string
            // return <h1>Что то пошло не так</h1>;
        }
        return children;
    }
}

// export default withTranslation()(ErrorBoundaryMessage);
export default ErrorBoundary;
