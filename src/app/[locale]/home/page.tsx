import { useTranslations } from 'next-intl'

const Home = () => {
  const t = useTranslations('app')

  return (
    <main>
      <div>
        <h1>{t('title')}</h1>
        <p>{t('welcome')}</p>
      </div>
      <nav>
        <ul>
          <li>{t('navigation.home')}</li>
          <li>{t('navigation.products')}</li>
          <li>{t('navigation.cart')}</li>
          <li>{t('navigation.account')}</li>
        </ul>
      </nav>
    </main>
  )
}

export default Home
