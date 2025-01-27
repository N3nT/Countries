import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

import data from '../data.json'

import Nav from '../components/Nav'
import { ArrowLeft } from 'lucide-react'

function Detail(props) {
	const { slug } = useParams()
	const [detail, setDetail] = useState(null)

	useEffect(() => {
		const findDetail = data.filter((country) => country.alpha3Code === slug)
		if (findDetail.length > 0) {
			setDetail(findDetail[0])
		} else {
			console.error('Nie znaleziono kraju dla podanego slug.')
		}
	}, [slug])

	if (!detail) {
		return (
			<div>
				<p>Ładowanie szczegółów...</p>
			</div>
		)
	}

	return (
		<div className='bg-lightModeBackground dark:bg-darkModeBg dark:text-white min-h-screen'>
			<Nav handleDarkMode={props.handleDarkMode} theme={props.theme}/>
			<div className='px-10'>
				<Link
					to='/'
					className='p-4 my-10 w-[100px] bg-white dark:bg-darkModeEl shadow-md flex justify-between rounded-md'
				>
					{<ArrowLeft />}Back
				</Link>
				<div className='flex flex-col xl:flex-row items-center justify-center w-full'>
					<img
						className='max-w-[687px] w-full mb-10'
						src={detail.flags.svg}
						alt={`${detail.name} flag`}
					/>
					<div className='xl:ml-30 max-w-[687px] flex flex-col items-start w-full'>
						<h1 className='font-bold text-xl'>{detail.name}</h1>
						<div>
							<div className='mt-5'>
								<p className='mb-1'>
									<span className='font-bold'>Native Name: </span>
									{detail.nativeName}
								</p>
								<p className='mb-1'>
									<span className='font-bold'>Population: </span>
									{detail.population}
								</p>
								<p className='mb-1'>
									<span className='font-bold'>Region: </span>
									{detail.region}
								</p>
								<p className='mb-1'>
									<span className='font-bold'>Sub Region: </span>
									{detail.subregion}
								</p>
								<p className='mb-1'>
									<span className='font-bold'>Capital: </span>
									{detail.capital}
								</p>
							</div>
							<div className='mt-5'>
								<p className='mb-1'>
									<span className='font-bold'>Top Level Domain: </span>
									{detail.topLevelDomain}
								</p>
								<p className='mb-1'>
									<span className='font-bold'>Currencies: </span>
									{detail.currencies ? 
									(detail.currencies.map((currency) => {
										return `${currency.name}, `
									})) : (
									<></> //nie znaleziono kraju -> pusty element
									)}
								</p>
								<p className='mb-1'>
									<span className='font-bold'>Languages: </span>
									{detail.languages.map((language) => {
										return `${language.name}, `
									})}
								</p>
							</div>
						</div>
						<div className='flex flex-col justify-items-start'>
							<h2 className='font-bold mt-10 mb-5'>Border Countries: </h2>
							<div className='flex flex-wrap'>
								{detail.borders ? (
									detail.borders.map((border) => {
										const country = data.find(
											(country) => country.alpha3Code === border
										)
										if (country) {
											return <p className="bg-white dark:bg-darkModeEl p-2 mr-2 my-2 min-w-[100px] text-center rounded-md shadow-xl" key={border}>{country.name}</p>
										}
										return null //nie znaleziono kraju -> null
									})
								) : (
									<></> //nie znaleziono kraju -> pusty element
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Detail
