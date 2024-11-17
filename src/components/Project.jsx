import Card from "./Card";

const Project = () => {
  return (
    <section className="about">
      <div className="flex flex-col my-10 items-center justify-center max-w-screen">
        <h1 className="text-4xl font-extrabold">Projects</h1>
        <div className="flex my-10 mx-10 gap-6 flex-row">
          <Card>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias,
            magni.
          </Card>
          <Card>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias,
            magni.
          </Card>
          <Card>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias,
            magni.
          </Card>
          <Card>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias,
            magni.
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Project;
