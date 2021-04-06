export default function ContributingSection() {
    return(
        <row className = 'grid md:grid-cols-3 lg:grid-cols-3 '>
        <a 
          className = 'h-10 text-base  py-3 px-3 my-2 mx-3 inline-block bg-white w-auto text-center rounded-full duration-200 hover:shadow-lg' 
          href='https://forms.gle/qoL5Kx8sG8hneozh9' 
          target="_blank"
          >🙋‍♂️ Contribute as an Expert Speaker</a>

          <a 
          className = 'h-10 text-base py-3 px-3 my-2 mx-3 inline-block bg-white w-auto text-center rounded-full duration-200 hover:shadow-lg ' 
          href='https://forms.gle/qoL5Kx8sG8hneozh9' 
          target="_blank"
          >✳️ Contribute as a Moderator</a>
          
          <a 
          className = 'h-10 text-base py-3 px-3 my-2 mx-3 inline-block contributing-btn-color w-auto text-center rounded-full duration-200 hover:shadow-lg' 
          href='https://forms.gle/qoL5Kx8sG8hneozh9' 
          target="_blank"
          >💬 Request a Topic</a>
      </row>
    )
}

// py-5 px-1.5 m-3 inline-block bg-white w-auto text-center rounded-full