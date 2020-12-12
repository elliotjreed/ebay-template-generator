import * as React from "react";
import { ChangeEvent, ReactElement, useRef, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { convertToRaw, EditorState } from "draft-js";
import draftToHtml from "draftjs-to-html";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-solid-svg-icons/faSave";

import { template } from "../templates/tcs";
import "./../assets/scss/App.scss";

const Contact = (): ReactElement => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const textAreaRef = useRef(null);

  const onEditorStateChange = (state): void => {
    setEditorState(state);
  };

  const copyToClipboard = (e) => {
    textAreaRef.current.select();
    document.execCommand("copy");
    e.target.focus();
  };

  const renderForm: ReactElement = (
    <form className="column is-10-desktop is-offset-1-desktop is-12">
      <div className="field">
        <label htmlFor="title" className="label">
          Item Title
        </label>
        <div className="control">
          <input
            id="title"
            className="input"
            type="text"
            placeholder="Item title"
            onChange={(event: ChangeEvent<HTMLInputElement>): void =>
              setTitle(event.target.value)
            }
          />
        </div>
      </div>

      <div className="field">
        <label htmlFor="description" className="label">
          Item Description
        </label>
        <div className="control">
          <Editor
            id="description"
            toolbar={{
              options: [
                "inline",
                "blockType",
                "fontSize",
                "fontFamily",
                "list",
                "textAlign",
                "colorPicker",
                "link",
                "remove",
                "history",
              ],
            }}
            editorClassName="textarea is-info"
            onEditorStateChange={onEditorStateChange}
          />
        </div>
      </div>

      <div className="field is-grouped is-grouped-left">
        <div className="control">
          <button
            type="button"
            className="button is-primary"
            onClick={(): void =>
              setContent(
                template(
                  title,
                  draftToHtml(convertToRaw(editorState.getCurrentContent()))
                )
              )
            }
          >
            Generate
          </button>
        </div>
        <div className="control">
          <button
            type="button"
            className="button is-danger"
            onClick={(): void => setContent("")}
            disabled={content === ""}
          >
            Clear
          </button>
        </div>
      </div>
    </form>
  );

  return (
    <main className="main-content">
      <div className="container">
        <div className="columns is-multiline">
          <div className="column is-10-desktop is-offset-1-desktop is-12 has-text-centered">
            <h2 className="title">eBay Listing Generator</h2>
            <p>
              Add your eBay item title and description below, then click{" "}
              <em>Generate</em> to generate the HTML to use in the eBay listing.
            </p>
          </div>
        </div>
      </div>

      <div className="columns is-multiline">{renderForm}</div>

      {content !== "" && (
        <div className="columns is-multiline">
          <div className="column is-10-desktop is-offset-1-desktop is-12">
            <div className="field">
              <label htmlFor="html" className="label">
                HTML Template
              </label>
              <div className="control">
                <textarea
                  id="html"
                  className="textarea is-success"
                  defaultValue={content}
                  ref={textAreaRef}
                  rows={10}
                />
              </div>
            </div>
            <div className="field">
              <div className="control">
                <button
                  type="button"
                  className="button is-info"
                  disabled={content === ""}
                  onClick={copyToClipboard}
                >
                  <span className="icon is-small">
                    <FontAwesomeIcon className="fas" icon={faSave} />
                  </span>
                  <span>Copy to Clipboard</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Contact;
