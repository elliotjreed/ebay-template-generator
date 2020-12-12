import * as React from "react";
import { ChangeEvent, ReactElement, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { convertToRaw, EditorState } from "draft-js";
import draftToHtml from "draftjs-to-html";

import { template } from "../templates/tcs";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./../assets/scss/App.scss";

const Contact = (): ReactElement => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const onEditorStateChange = (state): void => {
    setEditorState(state);
  };

  const renderForm: ReactElement = (
    <div className="columns is-multiline">
      <div className="column is-10-desktop is-offset-1-desktop is-12">
        <form>
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

          <div className="field is-grouped is-grouped-centered">
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
              >
                Clear
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );

  return (
    <main className="main-content">
      <div className="container">
        <div className="columns is-multiline">
          <div className="column is-10-desktop is-offset-1-desktop is-12 has-text-centered">
            <h2 className="title">Get in Touch</h2>
            <p>For enquiries, please use the form below.</p>
          </div>
        </div>
      </div>

      {renderForm}

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
                  rows={10}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Contact;
