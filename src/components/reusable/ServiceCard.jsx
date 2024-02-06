/* eslint-disable react/prop-types */
import { Card, CardBody, Typography } from "@material-tailwind/react";

const ServiceCard = ({ icon, title, description }) => {
  return (
    <Card className="mt-6 w-96">
      <CardBody className="p-10 flex gap-5 flex-col">
        {icon}

        <div>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {title}
          </Typography>
          <Typography>{description}</Typography>
        </div>
      </CardBody>
    </Card>
  );
};
export default ServiceCard;
