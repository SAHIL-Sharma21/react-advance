import React from "react";

interface ErrorBoundaryState {
    hasError: boolean;
}
interface ErrorBoundaryProps {
    children: React.ReactNode;
}


class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps){
        super(props);
        this.state = {hasError: false}
    }

    static getDerivedStateFromError(): ErrorBoundaryState {
        return {hasError: true}
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
        console.log("Error caught by error", error, errorInfo);
    }

    handleRetry = () => {
        this.setState({hasError: false})
        window.location.reload(); //refresh the page
    }


    render(): React.ReactNode {
        if(this.state.hasError){
            return (
                <div>
                    <h1>Something went wrong</h1>
                    <button onClick={this.handleRetry}>Retry</button>
                </div>
            )
        }
        return this.props.children;
    }
}

export default ErrorBoundary;