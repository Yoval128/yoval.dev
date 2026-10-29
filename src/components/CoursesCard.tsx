import type { CertificateType } from "@/types";

const CoursesCard = ({ certificate }: { certificate: CertificateType }) => {
    return (
        <div className="flex flex-col justify-between rounded-2xl border border-border p-8 bg-card hover:bg-accent transition-all duration-300 hover:border-primary relative h-full">
            <div>
                <div className="flex justify-between items-start mb-2 gap-4">
                    <h3 className="text-lg font-medium text-foreground">{certificate.title}</h3>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground font-medium shrink-0">
                        {certificate.date}
                    </span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                    {certificate.institution}
                </p>

                {certificate.skills && (
                    <div className="flex flex-wrap gap-1.5 mb-4">
                        {certificate.skills.map((skill, i) => (
                            <span
                                key={i}
                                className="text-xs px-2 py-0.5 rounded bg-muted text-muted-foreground"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                )}
            </div>

            {certificate.credentialUrl && (
                <a
                    href={certificate.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-primary hover:underline mt-2"
                >
                    Ver certificado &rarr;
                </a>
            )}
        </div>
    );
};

export default CoursesCard;