import DateFormatter from './date-formatter'
import PostTitle from './post-title'

type Props = {
  title: string
  date: string
  toc: object[]
}

const PostHeader = ({ title, date, toc }: Props) => {
  return (
    <div className="mt-12">
      <PostTitle>{title}</PostTitle>
      <div className="max-w-2xl mx-auto">
        <div className="mb-6 text-lg text-end">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </div>
  )
}

export default PostHeader
