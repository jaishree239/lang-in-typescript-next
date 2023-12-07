import { getDictionary } from '../../../getDictionary'


export default async function Home({ params }) {
  const lang = await getDictionary(params.lang)

  return (
    <main>
      {lang.form.title}
    </main>
  )
}
