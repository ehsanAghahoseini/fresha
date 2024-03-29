import  Layout  from '@/components/layout-components/Layout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "keen-slider/keen-slider.min.css"
import { QueryClientProvider, QueryClient } from 'react-query';
import ContextContainerModels from '@/context/ContextContainer';
import 'leaflet/dist/leaflet.css';

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <>
      <Head>
        <title>Mwa3id</title>
        <meta name="description" content="Mwa3id" />
        <meta content='width=device-width, initial-scale=1, user-scalable=1, minimum-scale=1, maximum-scale=5' name='viewport' />
      </Head>
      <ContextContainerModels>
        <  QueryClientProvider client={queryClient}>
          <Layout>
            <Component {...pageProps} />
            <ToastContainer
              position="top-right"
              rtl={true}
              hideProgressBar={false} newestOnTop
              closeOnClick
              theme={'light'}
              pauseOnFocusLoss
              draggable pauseOnHover
            />
          </Layout>
        </ QueryClientProvider>
      </ContextContainerModels>
    </>
  )
}
