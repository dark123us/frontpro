import { render } from 'react-dom';
import App from 'app/App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import { Suspense } from 'react';
import 'shared/config/i18n/i18n';
import ErrorBoundary from 'app/providers/ErrorBoundary/ui/ErrorBoundary';

render(
    <BrowserRouter>
        <ErrorBoundary>
            <ThemeProvider>
                <Suspense fallback="">
                    <App />
                </Suspense>
            </ThemeProvider>
        </ErrorBoundary>
    </BrowserRouter>,

    document.getElementById('app'),
);
