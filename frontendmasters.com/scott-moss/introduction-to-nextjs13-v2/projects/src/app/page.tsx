import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

const getData = async () => {
    const data = await fetch("https://www.reddit.com/.json");
    return data.json();
}

export default async function Home() {
    const data = await getData();
    const post = data.data.children[0].data.title;
    
    return (
        <main className={styles.main}>
            <Header />
            <div className={inter.className}>Home Page</div>
            {post}
        </main>
    )
}
