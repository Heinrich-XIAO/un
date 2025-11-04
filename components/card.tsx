function Card({ card_number }: { card_number: number }) {
  return (
    <>
      <div className="w-20 h-28 bg-white text-black flex justify-center items-center rounded-xl">
        <span>{card_number}</span>
      </div>
    </>
  )
}

export default Card
