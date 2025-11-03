"use client"

import { Award, HelpCircle, MapPin, MessageCircle, Sparkles } from "lucide-react";
import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import TestimonialCardThree from '@/components/sections/testimonial/TestimonialCardThree';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "Accueil", id: "hero" },
            { name: "Produits", id: "products" },
            { name: "À propos", id: "about" },
            { name: "Témoignages", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Boulangerie Française"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Artisanat Français Authentique"
          description="Découvrez nos créations artisanales préparées chaque matin avec des ingrédients traditionnels français"
          tag="Boulangerie Artisanale"
          tagIcon={Award}
          buttons={[
            { text: "Voir nos produits", href: "products" },
            { text: "Nous contacter", href: "contact" }
          ]}
          imageSrc="https://images.pexels.com/photos/32459865/pexels-photo-32459865.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Intérieur chaleureux de boulangerie française avec croissants frais"
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardThree
          title="Nos Spécialités"
          description="Découvrez nos créations artisanales préparées chaque matin"
          tag="Produits Frais"
          tagIcon={Sparkles}
          products={[
            {
              id: "1",
              name: "Croissant Beurre Traditionnel",
              price: "1,50€",
              imageSrc: "https://images.pexels.com/photos/6205531/pexels-photo-6205531.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Croissant doré au beurre frais",
              initialQuantity: 1
            },
            {
              id: "2",
              name: "Baguette Française Artisanale",
              price: "2,20€",
              imageSrc: "https://images.pexels.com/photos/1775039/pexels-photo-1775039.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Baguette française croustillante",
              initialQuantity: 1
            },
            {
              id: "3",
              name: "Pâtisseries du Jour",
              price: "3,80€",
              imageSrc: "https://images.pexels.com/photos/4906454/pexels-photo-4906454.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Sélection de pâtisseries françaises",
              initialQuantity: 1
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="Tradition & Excellence"
          description={[
            "Depuis trois générations, notre famille perpétue l'art de la boulangerie française avec passion et savoir-faire.",
            "Chaque matin, nous préparons nos pains et viennoiseries selon les méthodes traditionnelles, en utilisant uniquement des ingrédients de première qualité."
          ]}
          buttons={[
            { text: "Notre histoire", href: "about" }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardThree
          title="Avis de nos Clients"
          description="Ce que disent nos clients fidèles"
          tag="Témoignages"
          tagIcon={MessageCircle}
          testimonials={[
            {
              id: "1",
              name: "Marie",
              handle: "@marie_gourmande",
              testimonial: "Les meilleurs croissants de Paris ! Je viens ici chaque matin depuis 5 ans.",
              imageSrc: "https://images.pexels.com/photos/6210715/pexels-photo-6210715.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait de Marie"
            },
            {
              id: "2",
              name: "Pierre",
              handle: "@pierre_gastronome",
              testimonial: "Une boulangerie authentique où l'on retrouve le goût du vrai pain français.",
              imageSrc: "https://images.pexels.com/photos/6894103/pexels-photo-6894103.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait de Pierre"
            },
            {
              id: "3",
              name: "Sophie",
              handle: "@sophie_chef",
              testimonial: "En tant que chef, j'apprécie la qualité constante de leurs produits artisanaux.",
              imageSrc: "https://images.pexels.com/photos/7552730/pexels-photo-7552730.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait de Sophie"
            },
            {
              id: "4",
              name: "Henri",
              handle: "@henri_parisien",
              testimonial: "L'accueil chaleureux et les traditions respectées font de cette boulangerie un lieu unique.",
              imageSrc: "https://images.pexels.com/photos/4746667/pexels-photo-4746667.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait d'Henri"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Questions Fréquentes"
          description="Tout ce que vous devez savoir sur notre boulangerie"
          tag="Informations"
          tagIcon={HelpCircle}
          faqs={[
            {
              id: "1",
              title: "À quelle heure ouvrez-vous ?",
              content: "Nous ouvrons à 6h30 du matin du mardi au dimanche. Fermé le lundi."
            },
            {
              id: "2",
              title: "Proposez-vous des produits sans gluten ?",
              content: "Oui, nous avons une sélection de pains et pâtisseries sans gluten préparés dans un environnement dédié."
            },
            {
              id: "3",
              title: "Peut-on commander en avance ?",
              content: "Bien sûr ! Appelez-nous la veille pour réserver vos produits préférés."
            },
            {
              id: "4",
              title: "Livrez-vous à domicile ?",
              content: "Nous proposons la livraison dans un rayon de 5km pour les commandes supérieures à 20€."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Contact"
          tagIcon={MapPin}
          title="Restez informés de nos nouveautés"
          description="Inscrivez-vous à notre newsletter pour découvrir nos créations saisonnières et nos offres spéciales"
          inputPlaceholder="Votre adresse email"
          buttonText="S'inscrire"
          termsText="En vous inscrivant, vous acceptez de recevoir nos communications. Vous pouvez vous désabonner à tout moment."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={[
            {
              title: "Produits",
              items: [
                { label: "Pains", href: "products" },
                { label: "Viennoiseries", href: "products" },
                { label: "Pâtisseries", href: "products" }
              ]
            },
            {
              title: "Informations",
              items: [
                { label: "À propos", href: "about" },
                { label: "Contact", href: "contact" },
                { label: "Horaires", href: "faq" }
              ]
            }
          ]}
          copyrightText="© 2025 | Boulangerie Française"
        />
      </div>
    </ThemeProvider>
  );
}