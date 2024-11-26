
const AboutSection = ({title,description}:{title: string, description: string}) => {
    return (
        <div>
            <h2 className="font-semibold text-5xl text-emerald-800 text-center">{title}</h2>
            <p className="text-lg text-justify lg:text-center">{description}
            </p>
        </div>
    )
}

export default AboutSection
