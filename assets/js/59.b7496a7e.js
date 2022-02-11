(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{843:function(t,e,s){t.exports=s.p+"assets/img/cert-manager-workloads.dd792c6e.png"},844:function(t,e,s){t.exports=s.p+"assets/img/https-inspector.4dacbadc.png"},950:function(t,e,s){"use strict";s.r(e);var a=s(35),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"bonus-optional-secure-endpoints-with-ssl-certificates"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bonus-optional-secure-endpoints-with-ssl-certificates"}},[t._v("#")]),t._v(" Bonus (optional): Secure Endpoints with SSL Certificates")]),t._v(" "),a("h2",{attrs:{id:"here-is-what-you-will-learn-🎯"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#here-is-what-you-will-learn-🎯"}},[t._v("#")]),t._v(" Here is what you will learn 🎯")]),t._v(" "),a("p",[t._v("In this optional challenge, you will learn to secure your ingress traffic using TLS (HTTPS). To facilitate the issuance and management of certificates, we will introduce a tool called "),a("code",[t._v("cert-manager")]),t._v(".")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("cert-manager")]),t._v(" is a Kubernetes add-on to automate the "),a("em",[t._v("management")]),t._v(" and "),a("em",[t._v("issuance")]),t._v(" of "),a("em",[t._v("TLS certificates")]),t._v(" from various issuing sources.")]),t._v(" "),a("p",[t._v("It will ensure certificates are valid and up to date periodically, and attempt to renew certificates at an appropriate time before expiry.")]),t._v(" "),a("h1",{attrs:{id:"table-of-contents"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#table-of-contents"}},[t._v("#")]),t._v(" Table Of Contents")]),t._v(" "),a("ol",[a("li",[a("a",{attrs:{href:"#create-a-new-separate-namespace-for-the-cert-manager"}},[t._v("Create a new separate Namespace for the Cert-Manager")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#add-the-jetstack-helm-repository"}},[t._v("Add the Jetstack Helm Repository")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#install-the-cert-manager-helm-chart"}},[t._v("Install the Cert-Manager Helm Chart")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#add-a-letsencrypt-cluster-issuer"}},[t._v("Add a LetsEncrypt Cluster Issuer")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#update-your-frontend-ingress-configuration"}},[t._v("Update your Frontend Ingress Configuration")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#update-your-api-ingress-configurations"}},[t._v("Update your API Ingress Configurations")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#check"}},[t._v("Check")])])]),t._v(" "),a("h2",{attrs:{id:"create-a-new-separate-namespace-for-the-cert-manager"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-a-new-separate-namespace-for-the-cert-manager"}},[t._v("#")]),t._v(" Create a new separate Namespace for the Cert-Manager")]),t._v(" "),a("p",[t._v("To separate the "),a("code",[t._v("cert-manager")]),t._v(" from the rest of our resources, let's create a new namespace:")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("kubectl create namespace cert-manager\n")])])]),a("h2",{attrs:{id:"add-the-jetstack-helm-repository"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#add-the-jetstack-helm-repository"}},[t._v("#")]),t._v(" Add the Jetstack Helm Repository")]),t._v(" "),a("p",[a("code",[t._v("cert-manager")]),t._v(" comes with a set of different pods and custom resources so we will use helm to install all of it's components in one go.")]),t._v(" "),a("p",[t._v("First, we have to add the official repository from jetstack which contains the "),a("code",[t._v("cert-manager")]),t._v(" helm chart via:")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("helm repo "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" jetstack https://charts.jetstack.io\nhelm repo update\n")])])]),a("p",[t._v("We will prepare a small configuration for the helm chart.")]),t._v(" "),a("p",[t._v("Basically we want the Kubernetes "),a("em",[t._v("Custom Resource Definitions")]),t._v(" to be installed together with the chart and set some default values in terms of how TLS certificates are issued for our Ingress resources:")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# cert-manager-values.yaml")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("installCRDs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# install custom resource definitions")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ingressShim")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("defaultIssuerKind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ClusterIssuer\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("defaultIssuerName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" letsencrypt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("prod\n")])])]),a("h2",{attrs:{id:"install-the-cert-manager-helm-chart"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-the-cert-manager-helm-chart"}},[t._v("#")]),t._v(" Install the Cert-Manager Helm Chart")]),t._v(" "),a("p",[t._v("Now that we have prepared the configuration we can install (or upgrade) "),a("code",[t._v("cert-manager")]),t._v(" using a single command:")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ helm upgrade -i -f cert-manager-values.yaml --namespace cert-manager cert-manager jetstack/cert-manager\n\nRelease "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"cert-manager"')]),t._v(" does not exist. Installing it now.\nNAME: cert-manager\nLAST DEPLOYED: Tue Nov  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),t._v(":50:17 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2020")]),t._v("\nNAMESPACE: cert-manager\nSTATUS: deployed\nREVISION: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\nTEST SUITE: None\nNOTES:\ncert-manager has been deployed successfully"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n\nIn order to begin issuing certificates, you will need to "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" up a ClusterIssuer\nor Issuer resource "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("for example, by creating a "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'letsencrypt-staging'")]),t._v(" issuer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(".\n\nMore information on the different types of issuers and how to configure them\ncan be found "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" our documentation:\n\nhttps://cert-manager.io/docs/configuration/\n\nFor information on how to configure cert-manager to automatically provision\nCertificates "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" Ingress resources, take a "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("look")]),t._v(" at the "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),t._v("ingress-shim"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v("\ndocumentation:\n\nhttps://cert-manager.io/docs/usage/ingress/\n")])])]),a("p",[t._v("If you take a look at the Kubernetes dashboard under the "),a("code",[t._v("cert-manager")]),t._v(" namespace you should see a few green deployments showing up after a few seconds:")]),t._v(" "),a("p",[a("img",{attrs:{src:s(843),alt:"cert-manager namespace on the kubernetes dashboard"}})]),t._v(" "),a("h2",{attrs:{id:"add-a-letsencrypt-cluster-issuer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#add-a-letsencrypt-cluster-issuer"}},[t._v("#")]),t._v(" Add a LetsEncrypt Cluster Issuer")]),t._v(" "),a("p",[t._v("To make "),a("code",[t._v("cert-manager")]),t._v(" fully functional, we'll need to create a so called "),a("code",[t._v("Issuer")]),t._v(". "),a("em",[t._v("Issuers")]),t._v(", as their name suggests, issue TLS certificates for us.")]),t._v(" "),a("p",[t._v("For our sample application, we'll rely on the free service of "),a("a",{attrs:{href:"https://letsencrypt.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("letsencrypt.org"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("📝 Let’s Encrypt is a free, automated and open certificate authority (CA), run for the public’s benefit. It is a service provided by the Internet Security Research Group (ISRG).")])]),t._v(" "),a("p",[t._v("To configure Issuers (and manage the state of certificates) "),a("code",[t._v("cert-manager")]),t._v(" comes with a set of Custom Resource Definitions (CRDs). CRDs are used to extend the set of existing resources in Kubernetes with custom ones. They are one of the main extension mechanisms of Kubernetes.")]),t._v(" "),a("p",[a("code",[t._v("cert-manager")]),t._v(" knows two kinds of Issuers:")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("Issuer")]),t._v(": this is a namespaced resource that is only available for the namespace it is stored in.")]),t._v(" "),a("li",[a("code",[t._v("ClusterIssuer")]),t._v(": this is a cluster wide resource that is available for all namespaces.")])]),t._v(" "),a("p",[t._v("For our example, we will create a "),a("code",[t._v("ClusterIssuer")]),t._v(" since we trust all resources in our cluster.")]),t._v(" "),a("p",[t._v("To define our "),a("code",[t._v("ClusterIssuer")]),t._v(" we again use a YAML file that we will apply to our cluster. Let's take a look:")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# letsencrypt-prod-cluster-issuer.yaml")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" cert"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("manager.io/v1alpha2\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ClusterIssuer\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" letsencrypt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("prod\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("acme")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("server")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" https"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//acme"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("v02.api.letsencrypt.org/directory\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("email")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" update.your@email.com\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("privateKeySecretRef")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" letsencrypt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("prod\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("solvers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("http01")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ingress")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx\n")])])]),a("p",[t._v("Don't forget to update your email-address! The email address you provide will be used by Let's Encrypt to notify you of expiring certificates.")]),t._v(" "),a("p",[t._v("Hopefully you will never receive such notification because "),a("code",[t._v("cert-manager")]),t._v(" should take care of the certificate renewal process for you.")]),t._v(" "),a("p",[t._v("Let's apply our configuration:")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("kubectl apply -f letsencrypt-prod-cluster-issuer.yaml\n")])])]),a("h2",{attrs:{id:"update-your-frontend-ingress-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#update-your-frontend-ingress-configuration"}},[t._v("#")]),t._v(" Update your Frontend Ingress Configuration")]),t._v(" "),a("p",[t._v("Only two things are missing to complete our super secure TLS setup. We need to upgrade our ingress configurations for the frontend and the API(s).")]),t._v(" "),a("p",[t._v("We'll want to add two things each:")]),t._v(" "),a("ul",[a("li",[t._v("A "),a("code",[t._v("kubernetes.io/tls-acme: true")]),t._v(" annotation to enable the management of the TLS certificate through cert manager.")]),t._v(" "),a("li",[t._v("A "),a("code",[t._v("tls")]),t._v(" section in our Ingress "),a("code",[t._v("spec")]),t._v(" to define the hostname for the certificate and the name of the Kubernetes secret to store the certificate safely.")])]),t._v(" "),a("p",[t._v("Additionally, we also tell NGINX to always redirect unencrypted traffic to use SSL ("),a("code",[t._v("nginx.ingress.kubernetes.io/ssl-redirect: 'true'")]),t._v(")")]),t._v(" "),a("p",[t._v("The following shows how your "),a("code",[t._v("Ingress")]),t._v(" section for the frontend deployment should look like. Make sure you don't forget to update your domain names. Usually you'll want your TLS host to match the hostname for the ingress rule you have configured:")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" networking.k8s.io/v1beta1\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Ingress\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ing"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("frontend\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("annotations")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kubernetes.io/ingress.class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'nginx'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("nginx.ingress.kubernetes.io/enable-cors")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'true'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("nginx.ingress.kubernetes.io/cors-allow-headers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Authorization,Accept-Language'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("nginx.ingress.kubernetes.io/cors-max-age")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'600'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("nginx.ingress.kubernetes.io/proxy-body-size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'12m'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kubernetes.io/tls-acme")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'true'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("nginx.ingress.kubernetes.io/ssl-redirect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'true'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("tls")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("hosts")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" 20"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("67"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("122"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("249.nip.io "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# this should be replaced with YOUR OWN DOMAIN")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("secretName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" tls"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("secret\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("rules")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("host")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 20"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("67"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("122"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("249.nip.io "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# this should be replaced with YOUR OWN DOMAIN")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("http")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("paths")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("path")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("backend")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n              "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("serviceName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" frontend\n              "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("servicePort")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8080")]),t._v("\n")])])]),a("p",[t._v("If you access you website again you'll notice that after a few moments it's already being served through https and that your browser is redirected to the safe endpoint automatically.")]),t._v(" "),a("h2",{attrs:{id:"update-your-api-ingress-configurations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#update-your-api-ingress-configurations"}},[t._v("#")]),t._v(" Update your API Ingress Configurations")]),t._v(" "),a("p",[t._v("It's important not to forget to update our Ingress definitions for the other APIs as well. We would not want to deliver the static website client on a secure channel while leaving sensitive information from our APIs in the open.")]),t._v(" "),a("p",[t._v("Just like we did for the frontend, we also add the "),a("code",[t._v("kubernetes.io/tls-acme: 'true'")]),t._v(" and "),a("code",[t._v("nginx.ingress.kubernetes.io/ssl-redirect: 'true'")]),t._v(" annotations and the "),a("code",[t._v("tls")]),t._v(" configuration to the "),a("code",[t._v("spec")]),t._v(" section of our other ingress configurations.")]),t._v(" "),a("p",[t._v("Here is the example from the contacts API:")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" networking.k8s.io/v1beta1\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Ingress\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ing"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("contacts\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("annotations")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kubernetes.io/ingress.class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'nginx'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("nginx.ingress.kubernetes.io/enable-cors")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'true'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("nginx.ingress.kubernetes.io/cors-allow-headers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Authorization,Accept-Language'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("nginx.ingress.kubernetes.io/cors-max-age")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'600'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("nginx.ingress.kubernetes.io/proxy-body-size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'12m'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("nginx.ingress.kubernetes.io/rewrite-target")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/contacts/$2'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("nginx.ingress.kubernetes.io/use-regex")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'true'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kubernetes.io/tls-acme")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'true'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("nginx.ingress.kubernetes.io/ssl-redirect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'true'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("tls")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("hosts")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" 20"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("67"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("122"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("249.nip.io "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# this should be replaced with YOUR OWN DOMAIN")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("secretName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" tls"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("secret\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("rules")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("host")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 20"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("67"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("122"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("249.nip.io "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# this should be replaced with YOUR OWN DOMAIN")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("http")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("paths")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("path")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /api/contacts(\\/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v("$)(."),a("span",{pre:!0,attrs:{class:"token important"}},[t._v("*)")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("backend")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n              "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("serviceName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" contactsapi\n              "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("servicePort")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8080")]),t._v("\n")])])]),a("p",[t._v("You also need to adjust (and apply) "),a("strong",[t._v("all other ingress definitions")]),t._v(", for:")]),t._v(" "),a("ul",[a("li",[t._v("Search Service")]),t._v(" "),a("li",[t._v("Visit Reports Service")]),t._v(" "),a("li",[t._v("Resources Service")])]),t._v(" "),a("h2",{attrs:{id:"check"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#check"}},[t._v("#")]),t._v(" Check")]),t._v(" "),a("p",[t._v("Now let's check if everything connects as expected.")]),t._v(" "),a("p",[t._v("Navigate to you contacts website and use your browsers developer tools to make sure both the initial request to the website, as well as any subsequent request to the contacts API use secure HTTPS endpoints:")]),t._v(" "),a("p",[a("img",{attrs:{src:s(844),alt:"A display of the browsers developer tools"}})]),t._v(" "),a("p",[t._v("If both requests are being served over HTTPS were good to go!")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/day7/challenges/challenge-4.html"}},[t._v("◀ Previous challenge")]),t._v(" | "),a("RouterLink",{attrs:{to:"/day7/"}},[t._v("🔼 Day 7")])],1)])}),[],!1,null,null,null);e.default=n.exports}}]);