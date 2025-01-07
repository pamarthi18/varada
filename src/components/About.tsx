import { Award, Users, Rocket } from "lucide-react";

export const About = () => {
  const values = [
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Excellence",
      description: "Delivering outstanding IT solutions with precision and expertise",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Collaboration",
      description: "Working closely with clients to achieve their business goals",
    },
    {
      icon: <Rocket className="h-8 w-8 text-primary" />,
      title: "Innovation",
      description: "Staying ahead with cutting-edge technology solutions",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Varada</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We are a leading IT services company dedicated to transforming businesses through technology innovation and excellence.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="p-6 rounded-lg border hover:shadow-lg transition-shadow">
              <div className="mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};