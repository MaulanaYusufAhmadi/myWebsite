const About = () => {
  return (
    <section className="about">
      <div className="flex flex-col items-center justify-center max-w-screen">
        <h1 className="text-4xl font-extrabold">About me</h1>
        <div className="max-h-screen max-w-screen flex gap-8 flex-row m-20 p-10">
          <div className="w-1/3 flex flex-col mr-4 border-2 items-center justify-center">
            <div className="flex items-center justify-center rounded-full border-2 w-64 h-64">
              Foto
            </div>
          </div>
          <div className="w-2/3 mx-auto my-auto border-2"> 
            <p className="mb-8 text-lg font-normal text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus ipsa fuga veniam quod numquam eum. Reiciendis
              distinctio modi, delectus tempora possimus sit magni quas
              doloribus alias sapiente fugiat fugit neque at hic natus adipisci
              nostrum, aspernatur ab sunt fuga suscipit accusamus voluptate
              deserunt. Minima molestiae repudiandae asperiores a, perspiciatis
              modi!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
