# Daily Progress

## 2026-05-27

# React Router Notes

## What is React Router?

React Router is a routing library for React applications that enables navigation between components/pages without reloading the browser.

It helps build **Single Page Applications (SPA)** by handling client-side routing.

---

## Why Use React Router?

- Enables client-side routing
- No full-page refresh
- Better performance
- Smooth user experience
- Supports dynamic routes
- Nested routing support

---

## Installation

```bash
npm install react-router-dom
```

---

## Basic Setup

```jsx
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
```

---

## Important Components

### 1. BrowserRouter

Wraps the app and enables routing.

```jsx
<BrowserRouter>
  <App />
</BrowserRouter>
```

---

### 2. Routes

Container for multiple routes.

```jsx
<Routes>
  <Route path="/" element={<Home />} />
</Routes>
```

---

### 3. Route

Defines a URL path and component.

```jsx
<Route path="/about" element={<About />} />
```

---

### 4. Link

Used for navigation without page refresh.

```jsx
<Link to="/about">About</Link>
```

---

### 5. NavLink

Same as `Link` but supports active styling.

```jsx
<NavLink to="/home">Home</NavLink>
```

---

## Dynamic Routing

Pass dynamic values through URL.

```jsx
<Route path="/product/:id" element={<Product />} />
```

Access parameter:

```jsx
import { useParams } from "react-router-dom";

const { id } = useParams();
```

Example URL:

```txt
/product/10
```

---

## Nested Routing

Create routes inside routes.

```jsx
<Route path="/dashboard" element={<Dashboard />}>
  <Route path="profile" element={<Profile />} />
</Route>
```

Use `Outlet`:

```jsx
import { Outlet } from "react-router-dom";

function Dashboard() {
  return <Outlet />;
}
```

---

## useNavigate()

Navigate programmatically.

```jsx
import { useNavigate } from "react-router-dom";

const navigate = useNavigate();

navigate("/home");
```

Example:

- Redirect after login
- Redirect after form submit

---

## useParams()

Access route parameters.

```jsx
const { id } = useParams();
```

---

## Query Parameters

Example URL:

```txt
/products?category=phone
```

Access query params:

```jsx
import { useSearchParams } from "react-router-dom";

const [searchParams] = useSearchParams();

const category = searchParams.get("category");
```

---

## 404 Page

Handle invalid routes.

```jsx
<Route path="*" element={<NotFound />} />
```

---

## Protected Routes

Restrict access to authenticated users.

```jsx
{
  isLoggedIn ? <Dashboard /> : <Login />;
}
```

---

## Lazy Loading

Improve performance using lazy loading.

```jsx
import { lazy } from "react";

const Home = lazy(() => import("./Home"));
```

---

## Common Hooks

| Hook                | Purpose                |
| ------------------- | ---------------------- |
| `useNavigate()`     | Navigate between pages |
| `useParams()`       | Get URL parameters     |
| `useLocation()`     | Get current route info |
| `useSearchParams()` | Handle query params    |

---

## Example Routing Setup

```jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/product/:id" element={<Product />} />
  <Route path="*" element={<NotFound />} />
</Routes>
```

---

## Key Takeaway

React Router enables **client-side routing** in React applications, allowing seamless navigation between components without refreshing the page.

## 2026-05-26

### 1. Refactored Projects

Refactored:

- Todo App
- Shade Generator

### Implemented-Hooks

#### useContext (Centralized Storage)

#### useReducer (State Handling)

---

### 2. Learned Peer Dependency (Practical)

#### What is Peer Dependency?

A package expects another package to already exist in the project.

It does not install automatically in older npm versions.

---

#### Practical Demonstration

Switched Node version to demonstrate older npm behavior.

**Commands Practiced:**

```bash
nvm install 14
nvm use 14

node -v
npm -v
```

**Version Used:**

```txt
Node v14.21.3
npm v6.14.18
```

Installed only:

```bash
npm install react-dom
```

Observed warning:

```bash
react-dom@19.2.6 requires a peer of react@^19.2.6 but none is installed. You must install peer dependencies yourself.
```

#### Problem Observed

`react-dom` required `react`, but it was missing.

#### Fix

Installed required peer dependency manually:

```bash
npm install react
```

#### Learned

- Older npm versions show peer dependency warnings
- Modern npm auto-installs many peer dependencies
- Peer dependencies help avoid duplicate package versions
- Commonly used in React libraries/plugins

---

### 3. Practiced NVM (Node Version Manager)

Used NVM to switch Node.js versions based on project compatibility.

**Commands Practiced:**

```bash
nvm use 16
node -v
npm -v
```

**Project Configuration:**

```json
"engines": {
  "node": ">=18"
}
```

#### Practical Demonstration

Switched to Node v16:

```bash
nvm use 16
```

Current version:

```txt
v16.20.2
```

Tried running project:

```bash
npm install
```

Observed compatibility warning:

```bash
npm WARN EBADENGINE Unsupported engine
Required: { node: '>=18' }
Current: { node: 'v16.20.2' }
```

#### Fix

Switched back to supported version:

```bash
nvm use 24
```

**Purpose:**  
NVM helps switch Node versions according to project requirements and prevents compatibility issues.

```

### 4. Learned Advanced React Hooks

Practiced:

- `useOptimistic`
- `useLayoutEffect`
- `useTransition`

#### useOptimistic

Used for instant UI updates before actual confirmation.

**Example:**
Show UI update immediately before API success response.

---

#### useLayoutEffect

Runs before browser paint.

**Use Case:**
DOM measurement and preventing UI flickering.

---

#### useTransition

Used to keep UI responsive during heavy updates.

**Use Case:**
Searching/filtering large lists smoothly.
```

## 2026-05-25

### 1. Learned NVM (Node Version Manager)

**Purpose:**  
Manage multiple Node.js versions for different projects.

**Example Scenario:**

- Project A → Node v16
- Project B → Node v22

Without NVM, Node.js would need to be reinstalled repeatedly.

**Commands Practiced:**

```bash
nvm install 16
nvm install 22

nvm use 16
node -v

nvm use 22
```

---

### 2. Understood Dependency vs DevDependency

#### Dependency

Packages required for the application to run.

**Example:**

```bash
npm install axios
```

#### DevDependency

Packages required only during development.

**Example:**

```bash
npm install bootstrap --save-dev
```

---

### 3. Worked on React Hooks

Practiced:

- `useContext`
- `useReducer`
- `useRef`

---

### 4. Portfolio Project Updates

Completed:

- Added **Contact Page**
- Added **Footer Section**
