import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    

     <>
     <h1 className="text-3xl font-bold">Welcome to the page</h1>

      <ul>

        <li><Link href="/"  className={styles.link}>Home</Link></li>
        <li><Link href="/services" className={styles.link}>Services</Link></li>
        <li><Link href="/about" className={styles.link}>About</Link></li>
        <li><Link href="/contact" className={styles.link}>Contact</Link></li>
        <li><Link href="/products" className={styles.link}>Products</Link></li>
        <li><Link href="/about/branches" className={styles.link}>Branches</Link></li>
        <li><Link href="/products/vegis/" className={styles.link}>vegis</Link></li>

        
      </ul>
       <Link href="https://github.com/" target="_blank" id={styles.speicalLink}>GitHub</Link>
       <Link href="https://github.com/" target="_blank" id={styles.speicalLink}>Google</Link>
        <p>
        This is a simple Next.js application that demonstrates
         the use of routing and styling. You can navigate to dif
         ferent pages using the links above, and each page will 
         display its own content. The GitHub link will take you to the 
         GitHub website in a
         new tab. Enjoy exploring the app!

         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum bea
         tae voluptatem adipisci vero nobis, optio ducimus, accusantium inven#
         tore consectetur qui, iure
          veniam sint? A nisi in magnam, quibusdam sapiente ullam?
        </p>

     </>




      
  )
} 
