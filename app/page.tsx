import Image from 'next/image'
import styles from './page.module.css'
import CtaContact from '@/components/ctaContact/CtaContact'

export default function Home() {
    return (
        <main className={styles.main}>
            <div className="banner-illus">
                <Image
                    src={'/assets/bordeaux2.webp'}
                    alt="vue de la place de la bourse"
                    width={2048}
                    height={1365}
                />
                <div className="overlay"></div>
            </div>

            <div className="banner banner-accueil">
                <div className="banner-title">Cabinet CAP Patrimoine</div>
            </div>

            <div className="accueil-wrapper page-wrapper">
                <div className="banner-tagline">
                    Fiscalité - Patrimoine - Investissements immobiliers -
                    Placements financiers - Retraite
                </div>

                <div className="presentation">
                    {/* <Image
                        className="id-pic"
                        src={'/assets/christopheVitu.webp'}
                        alt="christophe vitu"
                        width={500}
                        height={500}
                    /> */}
                    <div className="presentation-detail-container"></div>
                    <div className="presentation-detail-text paragraph-content-text">
                        “ Spécialiste en gestion de patrimoine, je suis présent
                        à vos côtés pour vous accompagner dans toutes les phases
                        de vie de votre patrimoine: construction, développement,
                        optimisation, transmission. ”
                    </div>
                    <div className="presentation-detail-descr">
                        <div className="presentation-detail-name">
                            Christophe Vitu
                        </div>
                        <div className="presentation-detail-rank">
                            expert au cabinet CAP Patrimoine
                        </div>
                    </div>
                </div>

                <div className="characteristics">
                    <div className="characteristics-title">Notre politique</div>

                    <div className="characteristics-text paragraph-content-text">
                        Nous intervenons en interprofessionnalité avec vos
                        conseillers habituels : experts comptables, notaires et
                        avocats fiscalistes. Cette collaboration apporte un
                        regard croisé et crée une véritable valeur ajoutée.
                    </div>
                    <Image
                        className="characteristics-Image"
                        src={'/assets/handsShake.webp'}
                        alt="poignée de mains"
                        width={800}
                        height={533}
                    />
                </div>

                <CtaContact />

                <div className="user-review">
                    <div className="user-container">
                        <Image
                            className="user-Image"
                            src={'/assets/client1.webp'}
                            alt="portrait des témoins"
                            width={300}
                            height={450}
                        />
                        <div className="user-notice-container">
                            <div className="user-notice paragraph-content-text">
                                “ Sérieux, efficace, à l’écoute, professionnel.
                                ”
                            </div>
                            <div className="user-name">M. B M</div>
                        </div>
                    </div>

                    <div className="user-container">
                        <Image
                            className="user-Image"
                            src={'/assets/client2.webp'}
                            alt="portrait des témoins"
                            width={320}
                            height={418}
                        />
                        <div className="user-notice-container">
                            <div className="user-notice paragraph-content-text">
                                “ Très bon professionnel ! ”
                            </div>
                            <div className="user-name">M. Mme L</div>
                        </div>
                    </div>

                    <div className="user-container">
                        <Image
                            className="user-Image"
                            src={'/assets/client3.webp'}
                            alt="portrait des témoins"
                            width={320}
                            height={418}
                        />
                        <div className="user-notice-container">
                            <div className="user-notice paragraph-content-text">
                                “ Compétences, écoute, amabilité, efficacité. ”
                            </div>
                            <div className="user-name">MMe M M</div>
                        </div>
                    </div>

                    <div className="user-container">
                        <Image
                            className="user-Image"
                            src={'/assets/client4.webp'}
                            alt="portrait des témoins"
                            width={320}
                            height={418}
                        />
                        <div className="user-notice-container">
                            <div className="user-notice paragraph-content-text">
                                “ La recherche de mes besoins et les solutions
                                proposées sont très pertinentes. ”
                            </div>
                            <div className="user-name">M. T</div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
