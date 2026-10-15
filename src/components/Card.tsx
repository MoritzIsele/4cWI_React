type Props = {
  title: string;
  imgSrc: string;
  description: string;
};

export default function Card({ title, imgSrc, description }: Props) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <img src={imgSrc} />
      <p>{description}</p>
    </div>
  );
}
