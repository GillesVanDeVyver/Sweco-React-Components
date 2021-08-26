(() => ({
    name: 'InputSelect',
    type: 'CONTENT_COMPONENT',
    allowedTypes: [],
    orientation: 'HORIZONTAL',
    jsx: (() => {

        const {
            customModelAttribute: customModelAttributeObj,

            selectType,
            state,
            size,

            helperText,
            nameAttribute,


            optionType,
            // if optionType === 'static'
            selectOptions,

            // if optionType === 'property'
            property,

            // if optionType === 'model'
            model,
            filter,
            orderBy,
            order,
            labelProperty: labelProp,
            valueProperty: valueProp,
            showError,



        } = options;

        const displayError = showError === 'built-in';
        const isDev = B.env === 'dev';
        const { useAllQuery, getProperty, useText, getCustomModelAttribute } = B;
        const [errorState, setErrorState] = useState(false);
        const [afterFirstInvalidation, setAfterFirstInvalidation] = useState(false);
        const [helper, setHelper] = useState(useText(helperText));

        const { kind, values = [] } = getProperty(property) || {};

        const {
            id: customModelAttributeId,
            label = [],
            value: defaultValue = [],
        } = customModelAttributeObj;

        const [currentValue, setCurrentValue] = useState(useText(defaultValue));
        const labelText = useText(label);
        const nameAttributeValue = useText(nameAttribute);

        const customModelAttribute = getCustomModelAttribute(
            customModelAttributeId,
        );
        const { name: customModelAttributeName, validations: { required } = {} } =
            customModelAttribute || {};
        const value = currentValue;

        const { name: labelName } = getProperty(labelProp) || {};
        const { name: propName } = getProperty(valueProp) || {};

        const orderByArray = [orderBy].flat();
        const sort =
            !isDev && orderBy
                ? orderByArray.reduceRight((acc, orderByProperty, index) => {
                    const prop = getProperty(orderByProperty);
                    return index === orderByArray.length - 1
                        ? { [prop.name]: order.toUpperCase() }
                        : { [prop.name]: acc };
                }, {})
                : {};

        const { loading, error, data, refetch } =
            model &&
            useAllQuery(model, {
                filter,
                skip: 0,
                take: 50,
                variables: {
                    ...(orderBy ? { sort: { relation: sort } } : {}),
                },
            });

        const mounted = useRef(false);

        useEffect(() => {
            mounted.current = true;
            return () => {
                mounted.current = false;
            };
        }, []);

        useEffect(() => {
            if (mounted.current && loading) {
                B.triggerEvent('onLoad', loading);
            }
        }, [loading]);

        if (error && !displayError) {
            B.triggerEvent('onError', error.message);
        }

        const { results } = data || {};

        if (results) {
            if (results.length > 0) {
                B.triggerEvent('onSuccess', results);
            } else {
                B.triggerEvent('onNoResults');
            }
        }

        B.defineFunction('Refetch', () => refetch());

        const handleValidation = () => {
            const hasError = required && !value;
            setErrorState(hasError);
            const message = hasError
                ? useText(validationValueMissing)
                : useText(helperText);
            setHelper(message);
        };

        const handleChange = event => {
            const {
                target: { value: eventValue },
            } = event;

            if (afterFirstInvalidation) {
                handleValidation();
            }

            setCurrentValue(eventValue);
        };

        const validationHandler = () => {
            const hasError = required && !value;
            setAfterFirstInvalidation(hasError);
            handleValidation();
        };

        useEffect(() => {
            if (isDev) {
                setCurrentValue(useText(defaultValue));
            }
        }, [isDev, defaultValue]);

        const renderOptions = () => {
            if (kind === 'list' || kind === 'LIST') {
                return values.map(({ value: v }) => (
                    <option key={v} value={v}>
                        {v}
                    </option>
                ));
            }
            if (optionType === 'static') {
                return selectOptions.split('\n').map(option => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ));
            }
            if (loading) return <span>Loading...</span>;
            if (error && displayError) return <span>{error.message}</span>;
            return (results || []).map(
                item =>
                    propName &&
                    labelName && (
                        <option key={item.id} value={item[propName]}>
                            {item[labelName]}
                        </option>
                    ),
            );
        };


        const classNames = [
            "form-control",
            `form-control-${size}`
        ].join(" ");

        const selectTypeAttribute = { [selectType]: selectType };
        const stateAttribute = { [state]: state };
        const inputElement =
            (<div className="row form-group">
                <label htmlFor={nameAttributeValue || customModelAttributeName} className="col-lg-4 col-form-label">{labelText}</label>
                <div className="col-lg-8">
                    <select
                        onInvalid={validationHandler}
                        onChange={handleChange}
                        className={classNames} {...selectTypeAttribute} {...stateAttribute}>
                        {renderOptions()}
                    </select>
                </div>
            </div>)


        return inputElement;
    })(),
    styles: () => ({}),
}))();
