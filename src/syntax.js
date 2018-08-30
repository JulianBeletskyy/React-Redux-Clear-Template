// 1. index.js in folder

// Bad
import Footer from './Footer/Footer';
import Footer from './Footer/index';

// Good
import Footer from './Footer';

//2. className

// Bad
<MyComponent variant="fancy" />

// Good
<MyComponent className="fancy" />

// 3. Alignment

// Bad
<MyComponent className="fancy classnames" style="test" isValid={true} onChange={ref => this.comp = ref} type="products" options={['one', 'two', 'three', 'four']} />

<MyComponent 
	className="test"
	type="products"
/>

{
	list.map((item, i) => { return <div>
										<div></div>
										<MyComponent />
									</div>})

	list.map((item, i) => { return <div><div></div><MyComponent /></div> })
}

// Good
<MyComponent
	className="fancy classnames"
	style="test"
	isValid={true}
	onChange={ref => this.comp = ref}
	type="products"
	options={['one', 'two', 'three', 'four']} />

<MyComponent className="test" type="products" />

{
	list.map((item ,i) => {
		return 	<div>
					<div></div>
					<MyComponent />
				</div>
	})

	list.map((item, i) =>
		(
			<div>
				<div></div>
				<MyComponet />
			</div>
		)
}

// 4. IF

// Bad
{
	token ? 
		<div>
			<Header />
			<MainComponent />
			<Footer />
			<Modal />
		</div>
	: null
}

{ token ? <div><Header /><MainComponent /><Footer /><Modal /></div> : null }

{token &&
	<MainComponent />
}

{	
	token
	? 	<div>Content</div>
	: 	approve_token
	? 	<div>Another content</div>
	: 	<Loader />
}

{
	token
	? 	approve_token
	? 	<div>Content</div>
	: 	<AnotherLoader />
	: 	<Loader />
}

//Good

{
	token
	?	<div>
			<Header />
			<MainComponent />
			<Footer />
			<Modal />
		</div>
	: 	null
}

{ token && <MainComponent /> }

{
	token
	? 	<div>Content</div>
	: 	approve_token
		? 	<div>Another content</div>
		: 	<Loader />
}

{
	token
	? 	approve_token
		? 	<div>Content</div>
		: 	<AnotherLoader />
	: 	<Loader />
}

// 5. Quotes

// Bad
<Foo bar='bar' />

<Foo style={{ left: "20px" }} />

<Foo style={{ 'left': "20px" }} />

// Good
<Foo bar="bar" />

<Foo style={{ left: '20px' }} />

// 6. Spacing

// Bad

<Foo/>

<Foo
 />

 <Foo                 />

 <Foo bar={ baz } />

 // Good

<Foo />

<Foo bar={baz} />

 // 7. Props

 // Bad

 <Foo
	UserName="hello"
	phone_number={12345678} />

<Foo hidden={true} />

<MyComponent 
	hidden={true}
	title="Title"
	onChange={this.handleChange}
	color="grey"
	withButtons={['cancel', 'save']}
	onClick={this.onClick}
	isValid={true}
	type="responsive"
	arrows={false}
	label="Lable component" />

<img src="hello.jpg" />

<input type={this.props.type} onChange={this.props.onChange} disabled={this.props.disabled} />

// Good

<Foo
	userName="hello"
	phoneNumber={12345678} />

<Foo hidden />

const settings = {
	hidden: true,
	title: 'Title',
	onChange: this.handleChange,
	color: 'grey',
	withButtons: ['cancel', 'save'],
	onClick: this.onClick,
	isValid: true,
	type: 'responsive',
	arrows: false,
	label: 'Lable component',
}

<MyComponent {...settings} />

<img src="hello.jpg" alt="" />

const { type, onChange, disabled = false} = this.props

<input type={type} onChange={onChange} disabled={disabled} />

// 8. Tags

// Bad

<Foo variant="stuff"></Foo>

// Good

<Foo variant="stuff" />

// 9. Functions

// Bad

this.handleClick = (e, item) => {
	e.preventDefault()
	// click
}

<button onClick={(e) => this.handleClick(e, item)}></button>

// Good

this.handleClick = item => e => {
	e.preventDefault()
	// click
}

<button onClick={this.handleClick(item)}></button>