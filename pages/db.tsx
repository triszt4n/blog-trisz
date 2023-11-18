import Container from '../components/container'
import Layout from '../components/layout'
import MoreStories from '../components/more-stories'
import Post from '../interfaces/post'
import { getAllPosts } from '../lib/api'

type Props = {
  allPosts: Post[]
}

export default function Index({ allPosts }: Props) {
  return (
    <>
      <Layout>
        <Container>
          <section className="flex-col md:flex-row flex items-center md:justify-between mt-12 mb-16 md:mb-12">
            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">Gyakorlat posztok</h1>
            <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
              Ez az oldal az Adatbázisok VITMAB04 tárgy általam vezett gyakorlatának segédleteit gyűjti össze posztok
              formájában.
            </h4>
          </section>
          <MoreStories posts={allPosts} />
        </Container>
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts(['layout', 'title', 'date', 'slug', 'author', 'coverImage', 'excerpt'])
  return {
    props: { allPosts: allPosts.filter((post) => post.layout == 'db') }
  }
}
