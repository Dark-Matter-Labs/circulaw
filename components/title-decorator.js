export default function TitleDecorator({ width, colour }) {
  return <div className={`mt-6 h-[3px] ${width} ${colour ? colour : 'bg-green-500'}`} />;
}
