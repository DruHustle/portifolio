import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, Router as WouterRouter } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";

import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";

import Home from "./pages/Home";
import IMSOPDetail from "./pages/IMSOPDetail";
import LearningHubDetail from "./pages/LearningHubDetail";
import SmartFactoryIoTDetail from "./pages/SmartFactoryIoTDetail";
import IMSOPDocumentation from "./pages/IMSOPDocumentation";
import SmartFactoryIoTDocumentation from "./pages/SmartFactoryIoTDocumentation";
import Analytics from "./pages/Analytics";


function AppRouter() {
  return (
    <WouterRouter hook={useHashLocation}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/analytics" component={Analytics} />
        <Route path="/projects/imsop" component={IMSOPDetail} />
        <Route path="/projects/imsop/documentation" component={IMSOPDocumentation} />
        <Route path="/projects/sap-btp-ai-hub" component={LearningHubDetail} />
        <Route path="/projects/smart-factory-iot" component={SmartFactoryIoTDetail} />
        <Route path="/projects/smart-factory-iot/documentation" component={SmartFactoryIoTDocumentation} />
        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </WouterRouter>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster position="top-center" richColors />
          <AppRouter />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
