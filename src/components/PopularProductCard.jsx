import { star } from "../assets/icons"
function PopularProductCard({ imgURL, name, price}) {
  return (
    <div className=" flex flex-1 flex-col w-full max-sm:w-full">
      <img
        src={imgURL} alt={name}
        className=" w-[280px] h-[280px]"
      />
      <div className=" mt-8 flex flex-col justify-center items-start sm:items-center gap-2">
        <span className="flex flex-row space-x-2"><img src={star} alt="rating" width={24} height={24}/>
        <p className=" font-montserrat text-xl leading-normal text-slate-gray">(4.5)</p></span>
        <h3 className=" mt-2 text-xl leading-normal font-semibold font-palanquin">{name}</h3>
        <p className=" mt-2 font-semibold font-montserrat text-coral-red text-2lx leading-normal">{price}</p>
      </div>
    </div>
  )
}

export default PopularProductCard
