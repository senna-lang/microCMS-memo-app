import ReactLoading from "react-loading";


const Loading = () => {
  return (
   <section className="flex justify-center items-center h-screen">
   <div>
     <ReactLoading
       type="spin"
       color="#ebc634"
       height="100px"
       width="100px"
       className="mx-auto"
     />
     {/* <p className="text-center mt-3">{loadingText}</p> */}
   </div>
 </section>
  )
}

export default Loading