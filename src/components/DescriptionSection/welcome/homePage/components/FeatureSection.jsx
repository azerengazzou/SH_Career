import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Easy online resume builder",
    description:
      "Quickly Create Impressive Resumes Online. No Downloads Needed, All in Your Browser",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Approved templates",
    description:
      "Professionally-designed resume templates and examples. Just edit and download or save in 1 minutes",
    icon: LockClosedIcon,
  },
  {
    name: "Multi-format resume options",
    description:
      "Save your perfect resume in any common format, including Microsoft Word and PDF in a single click.",
    icon: ArrowPathIcon,
  },
  {
    name: "Comprehensive CV Sections",
    description:
        "Our platform provides all the essential sections required to build a professional CV seamlessly. Say goodbye to the hassle of figuring out what to include",
    icon: FingerPrintIcon,
  },
  {
    name: "Intuitive Drag-and-Drop CV Builder",
    description:
        "With our user-friendly tools, building your perfect CV is as simple as dragging elements into place and making them your own.",
    icon: FingerPrintIcon,
  },
  {
    name: "Save and Export as JSON",
    description:
        "With our platform, you have the flexibility to save your meticulously crafted CV as a JSON file. This enables you to edit your CV later with ease and integrate the code in your own third-party app.",
    icon: FingerPrintIcon,
  },
];

export const FeatureSection = () => {
  return (
    <div className="py-24 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          
          <p className="mt-1 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Features designed to help you win your dream job
          </p>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Getting that dream job can seem like an impossible task.
            We’re here to change that. Give yourself a real advantage with the best online resume maker
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-7xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
              <dt className="text-lg font-semibold leading-6 text-black">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-l leading-6 text-gray-800">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
