import { render } from 'react-dom';
import 'app/styles/index.scss';
import App from 'app/App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import { Suspense } from 'react';
import 'shared/config/i18n/i18n';
import ErrorBoundary from 'app/providers/ErrorBoundary/ui/ErrorBoundary';
import { StoreProvider } from 'app/providers/StoreProvider';

render(
    <StoreProvider>
        <BrowserRouter>
            <ErrorBoundary>
                <ThemeProvider>
                    <Suspense fallback="">
                        <App />
                    </Suspense>
                </ThemeProvider>
            </ErrorBoundary>
        </BrowserRouter>
    </StoreProvider>,

    document.getElementById('app'),
);
