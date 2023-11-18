type Props = {
  content: string
}

const PostBody = ({ content }: Props) => {
  return (
    <div className="max-w-3xl mx-auto">
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  )
}

export default PostBody
