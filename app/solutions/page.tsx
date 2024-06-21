import Image from 'next/image'

export default function page() {
    return (
        <main>
            <div className="banner banner-solutions">
                <div className="banner-title">Nos solutions</div>
                <div className="banner-page-descr">
                    Les solutions proposées ne sont que l'aboutissement du
                    chemin parcouru ensemble, chemin à travers lequel vos
                    problématiques, vos besoins et attentes sont mis en avant.
                </div>
            </div>

            <div className="solutions-wrapper page-wrapper">
                <div className="solution">
                    <div className="solution-title">Épargne financière</div>
                    <Image
                        className="solution-img"
                        src="/assets/greenplant.webp"
                        width={800}
                        height={533}
                        alt="épargne financière"
                    />
                    <div className="solution-text paragraph-content-text">
                        Assurance vie, Contrat de capitalisation, PER, FIP FCPI,
                        Offre Multigestionnaire, contrat à architecture ouverte,
                        options de gestion financière, garantie plancher des
                        sommes investies.
                    </div>
                </div>

                <div className="solution">
                    <div className="solution-title">Épargne immobilière</div>
                    <div>
                        <Image
                            className="solution-img"
                            src="/assets/keys.webp"
                            width={800}
                            height={601}
                            alt="épargne immobilière"
                        />
                    </div>
                    <div className="solution-text paragraph-content-text">
                        Dispositifs Pinel
                        <br />
                        Dispositif Malraux
                        <br />
                        SCPI de rendement
                        <br />
                    </div>
                </div>

                {/* <CtaContact /> */}
            </div>
        </main>
    )
}
