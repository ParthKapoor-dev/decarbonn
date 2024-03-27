import FaqCard from "../faqCard"

export default function FAQSection() {

  const data = [
    {
      question: "How Do I Invest in a Project ?",
      answer: "Please Invest in our project"
    },
    {
      question: "Can I get more details on the project than already on the site?",
      answer: 'Please Contact ME'
    },
    {
      question: "When will I receive Carbon credits in my account",
      answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Vero error voluptatum aliquam? Dicta, reprehenderit amet aperiam aliquam ducimus porro officiis!"
    }
  ]


  return (
    <div className="flex justify-center items-center flex-col mb-40 mt-20">
      <div className="font-bold text-4xl mb-10 max-md:text-xl">
        Frequently asked questions
      </div>

      <div className="flex flex-col gap-4">
        {data.map(item => (
          <FaqCard item={item} />
        ))}
      </div>


    </div>
  )
}