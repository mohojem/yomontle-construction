import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => {
  return (
    <Card className="group hover:shadow-elegant transition-smooth cursor-pointer border-2 hover:border-primary/20 bg-card h-full">
      <CardHeader>
        <div className="w-16 h-16 gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth shadow-elegant">
          <Icon className="w-8 h-8 text-primary-foreground" />
        </div>
        <CardTitle className="text-xl font-bold group-hover:text-primary transition-smooth">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
