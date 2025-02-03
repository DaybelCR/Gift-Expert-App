
export const GifItem = ({title,url}) => {
  return (
    <div className="card">
     <img src={url} alt={title} width={300}/>
     <p>{title}</p>
    </div>
  )
}
