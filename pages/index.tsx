import Container from '../components/container'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import MoreStories from '../components/more-stories'
import PuzzleAnimation from '../components/puzzle-animation'
import Post from '../interfaces/post'
import { getAllPosts } from '../lib/api'

type Props = {
  allPosts: Post[]
}

export default function Index({ allPosts }: Props) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  return (
    <>
      <Layout>
        <Container>
          <Intro />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          <PuzzleAnimation text="This page is under construction!" />
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts(['layout', 'title', 'date', 'slug', 'author', 'coverImage', 'excerpt'])

  return { props: { allPosts: [] } }
  return {
    props: { allPosts: allPosts.filter((post) => post.layout != 'db') }
  }
}
