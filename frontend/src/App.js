import { useEffect, Component } from "react";
import "@/App.css";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "sonner";
import Home from "@/pages/Home";
import { initLenis, destroyLenis } from "@/lib/scroll";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }
    static getDerivedStateFromError() {
        return { hasError: true };
    }
    render() {
        if (this.state.hasError) {
            return (
                <div className="flex min-h-screen items-center justify-center bg-[#fbf9f5] font-mono2 text-sm text-[#5c5852]">
                    Something went wrong — please refresh.
                </div>
            );
        }
        return this.props.children;
    }
}

function App() {
    useEffect(() => {
        initLenis();
        return () => destroyLenis();
    }, []);

    return (
        <ErrorBoundary>
            <BrowserRouter>
                <Home />
            </BrowserRouter>
            <Toaster
                position="bottom-center"
                toastOptions={{
                    style: {
                        background: "#171438",
                        color: "#f5f2eb",
                        borderRadius: "9999px",
                        fontFamily: "'IBM Plex Mono', monospace",
                        fontSize: "12px",
                        letterSpacing: "0.05em",
                    },
                }}
            />
        </ErrorBoundary>
    );
}

export default App;
