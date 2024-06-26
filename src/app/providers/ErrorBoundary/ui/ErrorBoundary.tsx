import {
    ErrorInfo, Component, ReactNode, Suspense,
} from "react";
import { PageError } from "widgets/PageError";
import { PageLoader } from "widgets/PageLoader";

interface ErrorBoundaryProps {
    children: ReactNode
}

interface ErrorBoundaryState {
    hasError: boolean | null;
}

export class ErrorBoundary
    extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        // You can also log the error to an error reporting service
        console.log(error, errorInfo);
    }

    render() {
        const { hasError } = this.state;
        const { children } = this.props;

        return hasError
            ? (<Suspense fallback={<PageLoader />}><PageError /></Suspense>)
            : children;
    }
}

// HOC for translation
// export default withTranslation()(ErrorBoundary);
