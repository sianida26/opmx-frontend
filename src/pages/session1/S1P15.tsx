interface Literature {
	reference: string;
	identifier: string | null;
}

const literatures: Literature[] = [
	{
		reference:
			"Barnes, A. D., Jochum, M., Lefcheck, J. S., Eisenhauer, N., Scherber, C., O’Connor, M. I., de Ruiter, P., & Brose, U. (2018). Energy Flux: The Link between Multitrophic Biodiversity and Ecosystem Functioning. Trends in Ecology and Evolution, 33(3), 186–197.",
		identifier: "https://doi.org/10.1016/j.tree.2017.12.007",
	},
	{
		reference:
			"Cardinale, B. J., Duffy, J. E., Gonzalez, A., Hooper, D. U., Perrings, C., Venail, P., Narwani, A., MacE, G. M., Tilman, D., Wardle, D. A., Kinzig, A. P., Daily, G. C., Loreau, M., Grace, J. B., Larigauderie, A., Srivastava, D. S., & Naeem, S. (2012). Biodiversity loss and its impact on humanity. Nature, 486(7401), 59–67.",
		identifier: "https://doi.org/10.1038/nature11148",
	},
	{
		reference:
			"Carter, C., Finley, W., Fry, J., Jackson, D., & Willis, L. (2007). Palm oil markets and future supply. European Journal of Lipid Science and Technology, 109(4), 307–314.",
		identifier: "https://doi.org/10.1002/ejlt.200600256",
	},
	{
		reference:
			"Clough, Y., Krishna, V. V., Corre, M. D., Darras, K., Denmead, L. H., Meijide, A., Moser, S., Musshoff, O., Steinebach, S., Veldkamp, E., Allen, K., Barnes, A. D., Breidenbach, N., Brose, U., Buchori, D., Daniel, R., Finkeldey, R., Harahap, I., Hertel, D., … Scheu, S. (2016). Land-use choices follow profitability at the expense of ecological functions in Indonesian smallholder landscapes. Nature Communications, 7.",
		identifier: "https://doi.org/10.1038/ncomms13137",
	},
	{
		reference:
			"Descals, A., Wich, S., Meijaard, E., Gaveau, D. L. A., Peedell, S., & Szantoi, Z. (2021). High-resolution global map of smallholder and industrial closed-canopy oil palm plantations. Earth System Science Data, 13(3), 1211–1231.",
		identifier: "https://doi.org/10.5194/essd-13-1211-2021",
	},
	{
		reference:
			"De Groot, R. S., Wilson, M. A., & Boumans, R. M. J. (2002). A typology for the classification, description and valuation of ecosystem functions, goods and services. Ecological Economics, 41(3), 393–408.",
		identifier: "https://doi.org/10.1016/S0921-8009(02)00089-7",
	},
	{
		reference:
			"Dirzo, R., & Mendoza, E. (2008). Biodiversity. Encyclopedia of Ecology, 368–377.",
		identifier: "https://doi.org/10.1016/B978-008045405-4.00460-2",
	},
	{
		reference:
			"Dislich, C., Keyel, A. C., Salecker, J., Kisel, Y., Meyer, K. M., Auliya, M., Barnes, A. D., Corre, M. D., Darras, K., Faust, H., Hess, B., Klasen, S., Knohl, A., Kreft, H., Meijide, A., Nurdiansyah, F., Otten, F., Pe’er, G., Steinebach, S., … Wiegand, K. (2017). A review of the ecosystem functions in oil palm plantations, using forests as a reference system. Biological Reviews, 92(3), 1539–1569.",
		identifier: "https://doi.org/10.1111/brv.12295",
	},
	{
		reference:
			"FAO. (2006). Plant Nutrition for Food Security. A Guide for Integrated Nutrient Management. Experimental Agriculture, 43(1).",
		identifier: "https://doi.org/10.1017/s0014479706394537",
	},
	{
		reference:
			"FAO. (2019). Crops. FAOSTAT statistical database. Rome, updated March 4, 2020.",
		identifier: "http://www.fao.org/faostat/en/#data/QC",
	},
	{
		reference:
			"Formaglio, G., Veldkamp E., Duan X., Tjoa A., and Corre, M.D. (2020). Herbicide weed control increases nutrient leaching compared to mechanical weeding in a large-scale oil palm plantation. Biogeosciences, 17, 5243–5262.",
		identifier: "https://doi.org/10.5194/bg-17-5243-2020",
	},
	{
		reference:
			"Formaglio, G. (2020). The effect of reduced management intensity on soil nutrient dynamics in a large-scale oil palm plantation: soil nitrogen cycle , asymbiotic nitrogen fixation and nutrient leaching losses. Dissertation.",
		identifier: "",
	},
	{
		reference:
			"Gillezeau, C., Van Gerwen, M., Shaffer, R. M., Rana, I., Zhang, L., Sheppard, L., & Taioli, E. (2019). The evidence of human exposure to glyphosate: A review. Environmental Health: A Global Access Science Source, 18(1), 1–14.",
		identifier: "https://doi.org/10.1186/s12940-018-0435-5",
	},
	{
		reference:
			"Grass, I., Kubitza, C., Krishna, V. V., Corre, M. D., Mußhoff, O., Pütz, P., Drescher, J., Rembold, K., Ariyanti, E. S., Barnes, A. D., Brinkmann, N., Brose, U., Brümmer, B., Buchori, D., Daniel, R., Darras, K. F. A., Faust, H., Fehrmann, L., Hein, J., … Wollni, M. (2020). Trade-offs between multifunctionality and profit in tropical smallholder landscapes. Nature Communications, 11(1).",
		identifier: "https://doi.org/10.1038/s41467-020- 15013-5",
	},
	{
		reference:
			"Hardy, S., & Hamilton, G. (2015). Hamilton & Hardy’s Industrial Toxicology (6. Edition). Wiley Online.",
		identifier: "https://doi.org/10.1002/9781118834015",
	},
	{
		reference:
			"Hooper, D. U., Chapin, F. S. I., Ewil, J. J., Hector, A., Inchausti, P., Lavorel, S., Lawton, J. H., Lodge, D. M., Loreau, M., Naeem, S., Schmid, D., Setälä, H., Symstad, A. J., Vandermeer, J., & Wardle, D. A. (2005). Effects of Biodiversity on Ecosystem Functioning: A Consensus of Current Knowledge. Ecological Monographs, 75(1), 3–35.",
		identifier: "https://doi.org/10.1111/2041-210X.12143",
	},
	{
		reference:
			"IPBES Glossary Committee. (2017). IPBES core glossary. https://ipbes.net/glossary",
		identifier: "https://ipbes.net/glossary",
	},
	{
		reference:
			"Kochhar, S. L., & Gujral, S. K. (2020). Plant physiology: theory and applications. Cambridge University Press.",
		identifier: "",
	},
	{
		reference:
			"Kraehmer, H., Laber, B., Rosinger, C., & Schulz, A. (2014). Herbicides as Weed Control Agents: State of the Art: I. Weed Control Research and Safener Technology: The Path to Modern Agriculture. Plant Physiology, 166(3), 1119–1131.",
		identifier: "https://doi.org/10.1104/pp.114.241901",
	},
	{
		reference:
			"Meijaard, E., Garcia-Ulloa, J., Sheil, D., Carlson, K. M., Wich, S. A., Juffe-Bignoli, D., & Brooks, T. M. (Eds.). (2018). Oil palm and biodiversity: A situation analysis by the IUCN Oil Palm Task Force. IUCN, International Union for Conservation of Nature.",
		identifier: "https://doi.org/10.2305/IUCN.CH.2018.11.en",
	},
	{
		reference:
			"Pirker, J., Mosnier, A., Kraxner, F., Havlík, P., & Obersteiner, M. (2016). What are the limits to oil palm expansion? Global Environmental Change, 40(1), 73–81.",
		identifier: "https://doi.org/10.1016/j.gloenvcha.2016.06.007",
	},
	{
		reference:
			"Qaim, M., Sibhatu, K. T., Siregar, H., & Grass, I. (2020). Environmental, Economic, and Social Consequences of the Oil Palm Boom. Annual Review of Resource Economics, 12(1), 321–344.",
		identifier: "https://doi.org/10.1146/annurev-resource-110119-024922",
	},
	{
		reference:
			"Sedlacek, C. J., Giguere, A. T., & Pjevac, P. (2020). Is Too Much Fertilizer a Problem? Frontiers for Young Minds, 8.",
		identifier: "https://doi.org/10.3389/frym.2020.00063",
	},
	{
		reference:
			"Tarazona, J. V., Court-Marques, D., Tiramani, M., Reich, H., Pfeil, R., Istace, F., & Crivellente, F. (2017). Glyphosate toxicity and carcinogenicity: a review of the scientific basis of the European Union assessment and its differences with IARC. Archives of Toxicology, 91(8), 2723–2743.",
		identifier: "https://doi.org/10.1007/s00204-017-1962-5",
	},
	{
		reference:
			"Teuscher, M., Gérard, A., Brose, U., Buchori, D., Clough, Y., Ehbrecht, M., Hölscher, D., Irawan, B., Sundawati, L., Wollni, M., & Kreft, H.. (2016). Experimental Biodiversity Enrichment in Oil-Palm-Dominated Landscapes in Indonesia. Frontiers in Plant Science, 7, 1538.",
		identifier: "https://doi.org/10.3389/fpls.2016.01538",
	},
	{
		reference:
			"Yarak, K., Witayangkurn, A., Kritiyutanont, K., Arunplod, C., & Shibasaki, R. (2021). Oil Palm Tree Detection and Health Classification on High- Resolution Imagery Using Deep Learning. Agriculture, 11(2), 183.",
		identifier: "https://doi.org/10.3390/agriculture11020183",
	},
];

export default function S1P15() {
	return (
		<main className="w-full text-slate-800 px-6 py-8 poppins flex flex-col gap-4 max-w-screen-lg mx-auto with-custom-popover">
			<h1>Bibliography Session I</h1>
			<h2 className="text-lg font-semibold -mb-2">Literature:</h2>
			<div className="flex flex-col text-xs gap-2">
				{literatures.map((literature) => (
					<p key={literature.identifier}>
						{literature.reference}{ " " }
						<a
							href={literature.identifier ?? ""}
							target="_blank"
							className="link break-words"
						>
							{literature.identifier}
						</a>
					</p>
				))}
			</div>
			{/* TODO: Add Figure bibliography */}
			<h2 className="text-lg font-semibold -mb-2">Layout:</h2>
			<div className="flex flex-col text-xs gap-2">
				<p>Dischereit, J. (2020). Green lines. [Clipart].</p>
				<p>Picard, C. (2019). Fruit bunches. [Photograph]. Retrieved Dec 23, 2020, from <a href="https://gd.eppo.int/taxon/EAIGU/photos" target="_blank" className="link">https://gd.eppo.int/taxon/EAIGU/photos</a></p>
				<p>Dischereit, J. (2020). School. [Clipart].</p>
				<p>Dischereit, J. (2020). Teacher. [Clipart].</p>
				<p>Dischereit, J. (2020). Pencil. [Clipart].</p>
			</div>
		</main>
	);
}
