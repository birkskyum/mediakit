// @refresh reload
import './app.css'
import { MetaProvider, Title } from '@solidjs/meta'
import { Router } from '@solidjs/router'
import { FileRoutes } from '@solidjs/start/router'
import { Suspense } from 'solid-js'
import { QueryClient } from '@tanstack/solid-query'
import { PRPCProvider } from '@solid-mediakit/prpc/provider'
import { ClerkProvider } from 'clerk-solidjs'

export default function App() {
  const queryClient = new QueryClient()
  return (
    <Router
      root={(props) => (
        <MetaProvider>
          <Title>SolidStart - Basic</Title>
          <ClerkProvider
            publishableKey={import.meta.env.VITE_CLERK_PUBLISHABLE_KEY}
          >
            <PRPCProvider queryClient={queryClient}>
              <Suspense>{props.children}</Suspense>
            </PRPCProvider>
          </ClerkProvider>
        </MetaProvider>
      )}
    >
      <FileRoutes />
    </Router>
  )
}
