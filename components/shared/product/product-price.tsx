import { cn } from "@/lib/utils";

const ProductPrice = ({ value, className }: { value: string; className?: string}) => {

  // get int string and decimal string
  console.log(value);
  const [intPart, decimalPart] = value.split(".");

  return ( <p className={ cn('text-2xl', className) }>
    <span className="text-xs align-super">$</span>
    { intPart }
    <span className="text-xs align-super">.{ decimalPart }</span>
  </p> );
}
 
export default ProductPrice;