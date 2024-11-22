import './App.css'
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Layout from './components/Layout';
import { ThemeProvider } from './context/theme-provider';
import WeatherDashboard from './pages/weather-dashboard';
import CityPage from './pages/city-page';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Toaster } from 'sonner';

const queryClient=new QueryClient({
  defaultOptions:{
    queries:{
      staleTime:5*60*1000,//5 minutes after 5 minutes if we re visit the same city it will refetch the data 
      gcTime:10*60*1000,//10 minutes garbage collection time after 10 min we will remove the data from memory ex for delhi weather it will remove the previous data after 10 min
      retry:false,
      refetchOnWindowFocus:false,
    }
  }
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
    <ThemeProvider defaultTheme='dark'>
      <Layout>
        <Routes>
          <Route path='/' element={<WeatherDashboard/>}/>
          <Route path='/city/:cityName' element={<CityPage/>}/>
        </Routes>
      </Layout>
      <Toaster richColors/>
    </ThemeProvider>
    </BrowserRouter>
    <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
