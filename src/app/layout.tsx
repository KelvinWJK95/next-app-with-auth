import '../styles/globals.css'
import styles from './layout.module.css'
import Header from '../components/Header'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head /><body>
        <div className={styles.app}>
          <header className={styles.appHeader}>
            <Header/>
          </header>
          <div className={styles.appBody}>
            {children}
          </div>
          <footer className={styles.appFooter}>
            <div className={styles.descriptionSection}>
              <code>2023 @ This website is coded using React.js & Next.js that consumes API that is built with Golang web services</code>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
