import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { ProtectedRoute, GuestRoute } from "./components/ProtectedRoute";
import { AuthPage } from "./components/AuthPage";
import { HomePage } from "./components/HomePage";
import { TimelinePage } from "./components/TimelinePage";
import { BuildingsPage } from "./components/BuildingsPage";
import { ArchitectsPage } from "./components/ArchitectsPage";
import { StylesPage } from "./components/StylesPage";
import { ArticlesPage } from "./components/ArticlesPage";
import { GamePage } from "./components/GamePage";

export const router = createBrowserRouter([
  {
    Component: GuestRoute,
    children: [
      { path: "/auth", Component: AuthPage },
    ],
  },
  {
    Component: ProtectedRoute,
    children: [
      {
        path: "/",
        Component: Layout,
        children: [
          { index: true, Component: HomePage },
          { path: "timeline", Component: TimelinePage },
          { path: "buildings", Component: BuildingsPage },
          { path: "architects", Component: ArchitectsPage },
          { path: "styles", Component: StylesPage },
          { path: "articles", Component: ArticlesPage },
          { path: "game", Component: GamePage },
        ],
      },
    ],
  },
]);