const topics = [
    {title: "Software Engineering", description: "Building innovative software solutions for the modern world."},
    {title: "Electrical Engineering", description: "Powering innovation in electronics and systems."}, 
    {title: "Mechanical Engineering", description: "Designing machines and systems that shape the future."}, 
    {title: "Chemical Engineering", description: "Advancing processes for a sustainable future."}
    ];

function EngineeringTopics(){
    return topics.map(function(item) {
        return (
            <div id={item.title}>
            <div>
            <h3>{item.title}</h3>
            </div>
            <div>
            <p>{item.description}</p>
            </div>
            </div>
        );
      });
}
export default EngineeringTopics;
