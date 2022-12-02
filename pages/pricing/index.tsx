import Link from 'next/link';
import { MainLayout } from '../../components/layouts/MainLayout';
import { DarkLayout } from '../../components/layouts/DarkLayout';

export default function aboutPage() {
  return (
    <>    
        <h1>Princing Page</h1>
        <h1 className='title'>
          Ir a <Link href="/">Home</Link>
        </h1>
        <p className='description'>
          Estamos en Princing
        </p>  
    </>    
  );
}


aboutPage.getLayout = function getLayout (page : any){
  return (
    <MainLayout>      
        {page}      
    </MainLayout>
  )
}
