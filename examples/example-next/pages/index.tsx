import { useVariable } from "@evolv-delivery-tools/react";
import { Button } from "ui";

export default function Web() {
  const checkoutStepsVariant = useVariable('movies.cta-text', 'Checkout');
  const copyrightVariant = useVariable('movies.view-all-button', 'View All');
  return (
    <div>
      <h1>{checkoutStepsVariant}</h1>
      <h1>{copyrightVariant}</h1>
      <Button />
    </div>
  );
}
