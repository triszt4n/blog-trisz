import Container from './container'

const Footer = () => {
  return (
    <footer className="border-t border-neutral-200 dark:border-gray-800">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 mt-0 lg:mb-0 lg:pr-4 lg:w-1/2">
            triszt4n's portfolio
          </h3>
          <div className="flex flex-col lg:flex-row justify-center lg:justify-end items-center lg:pl-4 lg:w-1/2">
            <a
              href="https://github.com/triszt4n"
              target="_blank"
              className="mx-3 bg-black hover:bg-white dark:bg-deep-purple-800 hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              My GitHub
            </a>
            <a href="https://www.linkedin.com/in/triszt4n/" target="_blank" className="mx-3 font-bold hover:underline">
              My Resume
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
