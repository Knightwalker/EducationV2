/**
 * Things you could try:
 *
 * JSX.Element;
 * JSX.Element | JSX.Element[];
 * React.ReactNode;
 * React.ReactChildren;
 * React.ReactChild[];
 */

type TBoxProps = {
    children: React.ReactNode,
    styles?: React.CSSProperties
};

const Box = ({ children, styles = { textAlign: "center" } }: TBoxProps): JSX.Element => {
    return (
        <section
            className="m-4"
            style={{ padding: '1em', border: '5px solid purple', ...styles }}
        >
            {children}
        </section>
    );
};

const Application = (): JSX.Element => {
    return (
        <main className="m-8">
            <Box>
                Just a string.
                <p>Some HTML that is not nested.</p>
                <Box>
                    <h2>Another React component with one child.</h2>
                </Box>
                <Box>
                    <h2 className="mb-4">A nested React component with two children.</h2>
                    <p>The second child.</p>
                </Box>
            </Box>
        </main>
    );
};

export default Application;
