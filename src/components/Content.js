import React, { useState, useEffect } from "react";
import "../css/content.css";
import pic from "../images/pci_dss.png";
import certificado from "../images/compliance_certificate.jpg";
import br_flag from "../images/brasil_flag.png";
import us_flag from "../images/us_flag.png";
import {FaAngleDown} from 'react-icons/fa'
import { FaPhoneAlt } from "react-icons/fa";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import LangSwitcher from "./LangSwitcher/LangSwitcher";

const Content = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((prevState) => !prevState);
  const br_items = [
    "Construir e manter uma rede segura através da qual conduzir as transações",
    "As informações dos titulares de cartão devem ser protegidas",
    "Manter o sistema protegido de hackers",
    "Implementar fortes medidas de controle de acesso",
    "Monitorar e testar as redes frequentemente",
    "Manter uma política de segurança formal",
  ];
  const us_items = [
    "Build and keep a safe network to conduct transactions",
    "The credit card owner's informations must be protected",
    "Keep the system protected from hackers",
    "Implement strong access control measures",
    "frequentenly monitor and test the networks",
    "Keep a formal security policy",
  ];

  const [lang, setLang] = useState("br");
  const langs = ["br", "us"];

  useEffect(() => {
    setLang(lang);
  }, [lang]);

  function UsTemplate() {
    return (
      <>
        <div className="pci-req">
			<div className="p-4">
				<div className="mb-5">
					<h5 className="text-dark bold mb-4">
						{/* Atendemos todas as categorias e principais requisitos PCI: */}
						We attend every main PCI requirements and categories
					</h5>
					<div className="row">
						<ul className="pci-req-items col-12 col-lg-8">
							{us_items.map((i) => {
								return <li>{i}</li>;
							})}
						</ul>
						<div className="certificado_view col-12 col-lg-2">
							<img className='certificate-img'src={certificado} />
							<span className="pb-1 ">view certificate</span>
						</div>
					</div>
				</div>
				<div className="mb-5">
					<div className='d-flex align-items-center mb-4'>
						<h5 className="text-dark bold">What is PCI compliance?</h5>
						<img className='col-lg-4' style={{width:'100px', height:'40px'}} src={pic}/>
					</div>
					<span className="text-content">
						{/* O PCI Compliance ou PCI DSS é uma certificação criada e exigida
						pelas principais bandeiras da indústria do cartão de pagamento para
						gerar mais segurança nas transações financeiras feitas na internet e
						em lojas físicas. <br />É também uma certificação internacional que
						avalia o nível de segurança de uma empresa que processa, armazena e
						transmite dados de cartões. Ela existe para proteger os dados e as
						informações pessoais dos titulares de cartão.`, */}
						The PCI compliance or PCI DSS is a certification created and
						demanded by the main brands of the payment card industry to generate
						more security on the finantial transactions made on the internet and
						physical stores. <br />
						It's also an international certification that avaliates the security
						level that a company process, store and send cards data. It exists
						to protect the data and the card owners' personal information.
					</span>
				</div>
				<div className="mb-5">
					<h5 className="text-dark bold mb-4">
						{/* O que significa ser certificado pelo PCI DSS */}
						What does it mean to be certified by PCI DSS?
					</h5>
					<span className="text-content">
						{/* A relação do cliente com a sua marca deve ser baseada em confiança.
						Apenas dessa forma é possível evitar que essa parceria acabe. Cuidar
						da segurança dos dados de seus clientes é uma das ações de mais
						relevância para que isso não aconteça. A certificação é necessária
						para prevenir fraudes na internet e, consequentemente, evitar custos
						desnecessários, como o ressarcimento de transações financeiras
						indevidas. */}
						The customer relationship to your brand must be based in trust. Only
						that way is possible to avoid the partnership's end. Taking care of
						your customer's data is one of the most relevant actions for that no
						to happen. The certification is necessary to prevent internet fraud,
						and consenquently, avoid unecessary costs, such as undue finantinal
						transactions refund
					</span>
				</div>
				<span className="d-block my-5 text-dark bold">
					Convertize is certified by PCI DSS
				</span>
			</div>
        </div>
      </>
    );
  }

  function BrTemplate() {
    return (
      <>
        <div className="pci-req">
          <div className="p-4">
            <div className="mb-5">
				<h5 className="text-dark bold mb-4">
					Atendemos todas as categorias e principais requisitos PCI:
				</h5>
				<div className="row">
					<ul className="pci-req-items mb-0 col-12 col-lg-8">
						{br_items.map((i) => {
							return <li>{i}</li>;
						})}
					</ul>
					<div className="certificado_view col-12 col-lg-2">
						<img src={certificado} />
						<span className="pb-1">visualize o certificado</span>
					</div>
				</div>
			</div>
			<div className="mb-5">
				<div className='d-flex align-items-center mb-4'>
					<h5 className="text-dark bold me-4">O que é PCI compliance?</h5>
					<img style={{width:'100px', height:'40px'}} src={pic}/>
				</div>
				<span className="text-content">
					O PCI Compliance ou PCI DSS é uma certificação criada e exigida
					pelas principais bandeiras da indústria do cartão de pagamento para
					gerar mais segurança nas transações financeiras feitas na internet e
					em lojas físicas. <br />É também uma certificação internacional que
					avalia o nível de segurança de uma empresa que processa, armazena e
					transmite dados de cartões. Ela existe para proteger os dados e as
					informações pessoais dos titulares de cartão.`,
				</span>
			</div>
			<div className="mb-5">
				<h5 className="text-dark bold mb-4">
				O que significa ser certificado pelo PCI DSS?
				</h5>
				<span className="text-content">
					A relação do cliente com a sua marca deve ser baseada em confiança.
					Apenas dessa forma é possível evitar que essa parceria acabe. Cuidar
					da segurança dos dados de seus clientes é uma das ações de mais
					relevância para que isso não aconteça. A certificação é necessária
					para prevenir fraudes na internet e, consequentemente, evitar custos
					desnecessários, como o ressarcimento de transações financeiras
					indevidas.
				</span>
			</div>
            <span className="d-block my-5 text-dark bold">
            	A Convertize é certificada pelo PCI DSS.
            </span>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="content container">
		<div className="p-4 pb-0">
			<LangSwitcher
				br_flag={br_flag}
				us_flag={us_flag}
				lang={lang}
				br="br"
				us="us"
				handleBr={() => setLang("br")}
				handleUs={() => setLang("us")}
			/>
		</div>
    	{lang === "br" ? <BrTemplate /> : <UsTemplate />}
    </div>
  );
};

export default Content;