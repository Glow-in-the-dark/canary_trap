import {
  StarIcon,
  ArrowPathIcon,
  CpuChipIcon,
  VariableIcon,
  SparklesIcon,
  CubeTransparentIcon,
  FingerPrintIcon,
  PhotoIcon,
  DocumentCheckIcon,
} from "@heroicons/react/24/solid";

export const featuresData = [
  {
    color: "red",
    title: "Proof of Concept",
    icon: PhotoIcon,
    description:
      "Free Trial. Ability to create different copies for multiple distribution. However, limited to only Images(.png). Required uploading of entire image to detect a match",
    price: "Free",
  },
  {
    color: "orange",
    title: "PDF ",
    icon: DocumentCheckIcon,
    description:
      "Ability to also work on PDF documents. Require uploading entire images to detect a match. If not detected, probability to the closest altered images will be provided",
    price: "$0.19/Page",
  },
  {
    color: "blue",
    title: "AI Detection ",
    icon: SparklesIcon,
    description:
      "All the above, with added functionality to detect leaked images, even if it is 'CROPPED' or 'SKEWED' from original documents. Enabled by our proprietary AI algorithm ",
    price: "$0.99/page",
  },
  {
    color: "teal",
    title: "Enterpise",
    icon: FingerPrintIcon,
    description:
      "Custom APIs for embedding our different layers of image obfuscation directly onto your docu-sign documents, inclusive of all the above features.  Contact Us ",
    price: "Custom Pricing",
  },
];

export default featuresData;
